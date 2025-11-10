import Counter from "@/components/Counter";
import ScreenInfo from "@/components/ScreenInfo";
import Timer from "@/components/Timer";

export default function Page() {
  return (
    <main className="p-6">
      <Counter />
      <Timer />
      <ScreenInfo />
    </main>
  );
}
