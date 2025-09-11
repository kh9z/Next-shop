import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button className="m-8">Click me</Button>
    </div>
  )
}
