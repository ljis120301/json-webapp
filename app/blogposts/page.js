import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeSnippet from "../components/CodeSnippet";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Cute Website</title>
        <meta
          name="description"
          content="A cute website built with Next.js and TailwindCSS"
        />
      </Head>
      <Header />
      <main>
        <div className="mt-10 text-center border-4 border-light-green dark:border-cat-frappe-lavender rounded-lg p-6 m-4 bg-[#ccd0da] dark:bg-cat-frappe-base shadow-lg">
          <h1 className="text-light-purple dark:text-cat-frappe-lavender text-3xl font-bold text-pretty">
            an introduction: 🌈
          </h1>
          <p className="text-[#4c4f69] dark:text-cat-frappe-subtext0 mt-4">
            Hello! Welcome to my blog website! I will be using this site to keep
            the world updated on what projects I am working on.
          </p>
          <p className="text-[#4c4f69] dark:text-cat-frappe-subtext0 mt-2">
            I intend to use this site to also inform the world of any changes I
            made in software to get it working or other tips and tricks
          </p>
          <p className="text-[#4c4f69] dark:text-cat-frappe-subtext0 mt-2">
            That is why I implemented a cool way of displaying code on my
            website!
          </p>
          <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-left">
            <div className="text-light-purple dark:text-cat-frappe-lavender text-left text-3xl font-bold">
              here's a cute code snippet:
            </div>
            <p className="text-[#4c4f69] dark:text-cat-frappe-subtext0 mt-2">This is for me to talk about the code I wrote</p>
            <CodeSnippet
              title={""}
              code={`def cute_function():
                 print("Hello, cute world!") 
                 return "🌈🦄✨"`}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}