// Import: Packages
import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";

// Import: Elements
import { Container, Heading, Section, SubHeading } from "./Post.elements";

// Page: Post
export default function Post() {
  // State:
  const [postData, setPostData] = useState([]);

  // Effect:
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url,
        },
        alt,
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <Container>
      <Section>
        <Heading>Blog</Heading>
        <SubHeading>Welcome to my Blog!</SubHeading>

        <div>
          <article>
            <Link>
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </Section>
    </Container>
  );
}
