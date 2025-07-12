import AppAreaChart from "@/components/AppAreaChart/AppAreaChart";
import AppBarChart from "@/components/AppBarChart/AppBarChart";
import { Button } from "@/components/ui/button";
import { Mouse } from "lucide-react";

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
    </div>
  );
}

export default Home;
