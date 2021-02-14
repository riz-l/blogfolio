// Import: Packages
import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";

// Import: Elements
import {
  Container,
  Heading,
  HeadingWrapper,
  Section,
  SubHeading,
} from "./Post.elements";

// Import: Components
import { Column, Grid, Row } from "../../components";

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
        <HeadingWrapper>
          <Heading>Blog</Heading>
          <SubHeading>Welcome to my Blog!</SubHeading>
        </HeadingWrapper>

        <Grid>
          <article>
            <Link to="/">
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </Grid>

        {/* TESTING */}
        <Grid>
          <Row>
            <Column size={1}>
              <p>Testing Column</p>
            </Column>
          </Row>

          <Row>
            <Column size={1} collapse="xs">
              <p>XS</p>
            </Column>
            <Column size={1} collapse="s">
              <p>S</p>
            </Column>
            <Column size={1} collapse="m">
              <p>M</p>
            </Column>
            <Column size={1} collapse="l">
              <p>L</p>
            </Column>
            <Column size={1} collapse="xl">
              <p>XL</p>
            </Column>
            <Column size={1} collapse="xxl">
              <p>XXL</p>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Container>
  );
}
