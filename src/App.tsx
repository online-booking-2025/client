import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div>
        Online Booking 2025 + <span className="text-blue-600">tailwind</span>
      </div>
      <Button>ShadCn</Button>
      <Button
        onClick={() => {
          throw new Error("This is your first error!");
        }}>
        Break the world
      </Button>
    </>
  );
}

export default App;
