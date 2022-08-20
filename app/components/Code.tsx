import { PropsWithChildren } from "react"

type CodeProps = {}

export default function Code({ children }: PropsWithChildren<CodeProps>) {
  return <code className="bg-gray-200 px-2 rounded">{children}</code>
}