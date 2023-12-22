import BlogFullCard from "@/components/atom/BlogFullCard";
import BtnOrange from "@/components/atom/BtnOrange";
import SubBlogCard from "@/components/atom/SubBlogCard";
import React from "react";

const Blog = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24 lg:pt-0 pb-24">
      <h3 className=" text-orange-col text-2xl font-bold mb-8">Blog</h3>
      <div className="flex gap-12 justify-between">
        <div className="hidden lg:block">
          <BlogFullCard
            imgUrl={"images/fullblogimg.png"}
            heading="Articles Related to Aesthetic Home Designs"
            subheading="You’ll Save time and Money on Trial and Error Decorating"
            date="August 20, 2023"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ut nibh non sagittis. Suspendisse interdum lectus id ante tincidunt, et mollis metus lobortis. Duis id tellus lacus .. "
          />
        </div>
        <div className="flex flex-col gap-4">
          <SubBlogCard
            heading="You’ll Save time and Money on Trial and Error Decorating"
            date="August 20, 2023"
            imgUrl={"/images/subblogimg.png"}
          />
          <SubBlogCard
            heading="You’ll Save time and Money on Trial and Error Decorating"
            date="August 20, 2023"
            imgUrl={"/images/subblogimg.png"}
          />
          <SubBlogCard
            heading="You’ll Save time and Money on Trial and Error Decorating"
            date="August 20, 2023"
            imgUrl={"/images/subblogimg.png"}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <BtnOrange text={"See all"} />
      </div>
    </section>
  );
};

export default Blog;
