/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from "@/components/common/ContainerWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import Layout from "@/layout/Layout";

export default function PageNotFound() {
  return (
    <Layout>
      <ContainerWrapper>
        <div className="max-w-lg mx-auto text-center grid grid-rows-[auto_1fr_auto] place-items-center md:gap-6 gap-12">
          <div className="grid grid-rows-[auto_auto] gap-6">
            <p className="text-4xl font-semibold">Opps!</p>
            <p className="text-xl">
              Looks like what you are looking for cannot be found.
            </p>
          </div>
          <div>
            <img
              src="/notFound.svg"
              className="h-[200px] lg:h-[400px] w-auto"
              alt="404"
            />
          </div>
          <div>
            {/* <Link
              href="/"
              className="bg-primary p-3 text-white rounded-full h-full"
            >
              Back to Home
            </Link> */}
            <LinkBtn text="Back to Home" href="/" />
          </div>
        </div>
      </ContainerWrapper>
    </Layout>
  );
}
