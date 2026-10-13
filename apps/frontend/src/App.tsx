import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Input />
      <Input />
      <Button>Start Interview</Button>

    </div>
  )
}