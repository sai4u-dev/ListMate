"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import type { RealtimeChannel } from "@supabase/supabase-js"

export function useRealTimeData<T>(
  tableName: string,
  initialData: T[] = [],
  options?: {
    column?: string
    value?: string | number
    event?: "INSERT" | "UPDATE" | "DELETE" | "*"
  },
) {
  const [data, setData] = useState<T[]>(initialData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setData(initialData)
    setLoading(false)
  }, [initialData])

  useEffect(() => {
    let channel: RealtimeChannel | null = null

    const setupSubscription = async () => {
      try {
        // Create a subscription
        channel = supabase
          .channel(`${tableName}-changes`)
          .on(
            "postgres_changes",
            {
              event: options?.event || "*",
              schema: "public",
              table: tableName,
              ...(options?.column && options?.value ? { filter: `${options.column}=eq.${options.value}` } : {}),
            },
            async (payload) => {
              // Handle different events
              if (payload.eventType === "INSERT") {
                setData((currentData) => [...currentData, payload.new as T])
              } else if (payload.eventType === "UPDATE") {
                setData((currentData) =>
                  currentData.map((item: any) => (item.id === payload.new.id ? payload.new : item)),
                )
              } else if (payload.eventType === "DELETE") {
                setData((currentData) => currentData.filter((item: any) => item.id !== payload.old.id))
              }
            },
          )
          .subscribe()
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)))
      }
    }

    setupSubscription()

    // Cleanup subscription on unmount
    return () => {
      if (channel) {
        supabase.removeChannel(channel)
      }
    }
  }, [tableName, options])

  return { data, loading, error }
}
