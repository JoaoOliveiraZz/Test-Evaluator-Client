import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function App() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files

    if (files && files.length > 0) {
      console.log(files[0])
    }
  }

  return (
    <div className="flex items-center justify-center gap-4 w-screen h-32 border border-dashed border-zinc-100">
      <Input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      <Button onClick={handleClick}>
        Selecionar arquivo
      </Button>
    </div>
  )
}