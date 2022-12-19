import { type NextPage } from "next";
import { useRouter } from "next/router";
import { ToolCard } from "../components/Landing";
import tabs from "../utils/tabs";
import tools from "../utils/tools";

const Home: NextPage = () => {

  const router = useRouter()

  const tabQuery = router.query.tab || ""

  return (
      <main className="grid gap-4 grid-flow-row grid-cols-12 auto-rows-max w-full">
        <article className="rounded-lg col-span-12 p-4">
          <h1 className="text-2xl font-semibold">Dev Toolbox</h1>
          <p>
            Explore our collection of tools for developers, designed to help you with your daily tasks.
          </p>
        </article>
        <nav className="rounded-lg col-span-12 p-4 bg-base-100 shadow-md grid grid-flow-col gap-4 text-center font-medium max-w-full overflow-x-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`btn rounded ${tabQuery === tab.query ? "btn-primary" : "btn-outline"}`}
              onClick={() => router.push(`/?tab=${tab.query}`)}
            >
              {tab.name}
            </div>
          ))}
        </nav>

        {tabQuery === "" ?
            tools.map((tool, index) => (
              <ToolCard
                key={index}
                name={tool.name}
                description={tool.description}
                category={tool.category}
                link={tool.link}
              />
            )):
            tools.filter(tool => tool.category === tabQuery).map((tool, index) => (
              <ToolCard
                key={index}
                name={tool.name}
                description={tool.description}
                category={tool.category}
                link={tool.link}
              />
            ))
        }
      </main>
  );
};

export default Home;
