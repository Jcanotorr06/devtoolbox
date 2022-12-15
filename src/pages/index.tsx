import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
      <main className="grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 auto-rows-max w-full">
        <article className="rounded-lg col-span-12 p-4">
          <h1 className="text-2xl font-semibold">Dev Toolbox</h1>
          <p>
            Explore our collection of tools for developers, designed to help you with your daily tasks.
          </p>
        </article>
        <article className="rounded-lg col-span-12 p-4 bg-base-100 shadow-md grid grid-flow-col gap-4 text-center font-medium max-w-full overflow-x-auto">
          <div className="col-span-auto btn rounded">
            Formatters
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Converters
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Generators
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Validators
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Encoders
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Decoders
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Minifiers
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Beautifiers
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Parsers
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Converters
          </div>
          <div className="col-span-auto btn rounded btn-outline">
            Others
          </div>
        </article>

        <article className="rounded-lg col-span-2 row-span-1 p-4 bg-base-100 shadow-md grid grid-cols-4 grid-rows-3">
          Tool 1
        </article>
      </main>
  );
};

export default Home;
