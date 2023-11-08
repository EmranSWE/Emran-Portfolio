import React from "react";

const SingleBlogs = ({ blog }) => {
  const { author, content, description, title, thumbnail, link, pubDate } =
    blog;
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col ">
          <img
            src={thumbnail}
            class=" h-48 w-96 rounded-lg shadow-2xl"
            alt={title}
          />
          <div>
            <h1 class="text-2xl font-bold">
              <h1 className="text-2xl text-center">{title}</h1>
            </h1>
            <p class="">
              <span className="text-sm">
                {description.slice(0, 200) + ` ...`}
              </span>
              <a href={link} rel="noreferrer" target="_blank">
                read more.{" "}
              </a>{" "}
            </p>

            <div className="card-actions">
              <p class=" break-all">
                {" "}
                Author:<span className="text-xl font-bold"> {author}</span>{" "}
                <br />
                <p class=" break-all">
                  {" "}
                  Published:<span className="text-sm"> {pubDate}</span>
                </p>
              </p>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
