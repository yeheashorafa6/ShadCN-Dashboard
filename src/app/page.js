import AppAreaChart from "@/components/AppAreaChart/AppAreaChart";
import AppBarChart from "@/components/AppBarChart/AppBarChart";
import AppPieChart from "@/components/AppPieChart/AppPieChart";
import CardList from "@/components/CardList/CardList";
import TodoList from "@/components/TodoList/TodoList";

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title={"latest Transactions"} />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <CardList title={"Popular Content"} />
      </div>
    </div>
  );
}

export default Home;
