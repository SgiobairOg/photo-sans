import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as merge from "deepmerge";
import InfiniteScroll from "react-infinite-scroller";
import Photo from "./../photo/photo";
import "./gallery.css";

class Gallery extends Component {
  canLoadMore = true;
  initialLoad = false;
  lastCursor = "";

  loadOlderPhotos = () => false;

  render() {
    return (
      <Query
        query={gql`
          {
            allPhotos(first: 2, orderBy: CREATED_DESC) {
              totalCount
              pageInfo {
                endCursor
              }
              nodes {
                id
                title
                body
                created
              }
            }
          }
        `}
      >
        {({ loading, error, data: { allPhotos }, fetchMore }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            const errorString = JSON.stringify(error);
            return <p>Error: {errorString}</p>;
          }

          console.log(allPhotos);
          const { nodes, totalCount, pageInfo } = allPhotos;
          console.log("Last Cursor:", pageInfo.endCursor);
          this.canLoadMore = nodes.length < totalCount;
          this.lastCursor = pageInfo.endCursor;

          this.loadOlderPhotos = () => {
            return fetchMore({
              query: gql`
                {
                allPhotos(after: "${
                  this.lastCursor
                }" first: 2 orderBy: CREATED_DESC) {
                  totalCount
                  pageInfo {
                    endCursor
                  }
                  nodes {
                    id
                    title
                    body
                    created
                  }
                }
              }
              `,
              updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult.allPhotos.pageInfo.endCursor === null) {
                  this.canLoadMore = false;
                  return prev;
                }

                return merge.all([
                  {},
                  prev,
                  {
                    allPhotos: {
                      pageInfo: {
                        endCursor: fetchMoreResult.allPhotos.pageInfo.endCursor
                      },
                      nodes: [...fetchMoreResult.allPhotos.nodes]
                    }
                  }
                ]);
              }
            });
          };

          return (
            <main className="gallery">
              {allPhotos.nodes.map(photo => (
                <Photo key={photo.id} photo={photo} />
              ))}
              {this.canLoadMore ? (
                <button
                  className="gallery__load-more"
                  onClick={() => this.loadOlderPhotos()}
                >
                  Load Older Photos
                </button>
              ) : (
                <p className="gallery__the-end">
                  That was the very last one... I'll work on some more.
                </p>
              )}
            </main>
          );
        }}
      </Query>
    );
  }
}

export default Gallery;
