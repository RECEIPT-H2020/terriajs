/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      authors {
        id
        full_name
        affiliation
      }
      title
      shortDescription
      description
      hotspotlocation {
        latitude
        longitude
      }
      sectors
      catalog {
        id
        json
      }
      image {
        id
        url
        caption
        alt
      }
      pages {
        id
        title
        section
        camera
        baseMapName
        currentTime {
          dayNumber
          secondsOfDay
        }
        viewer_mode_3d
        scenarios {
          id
          ssp
          content
          split_map
        }
        createdAt
        updatedAt
        owner
      }
      microstories {
        id
        authors {
          id
          full_name
          affiliation
        }
        title
        shortDescription
        description
        hotspotlocation {
          latitude
          longitude
        }
        sectors
        catalog {
          id
          json
        }
        image {
          id
          url
          caption
          alt
        }
        pages {
          id
          title
          section
          camera
          baseMapName
          viewer_mode_3d
          createdAt
          updatedAt
          owner
        }
        microstories {
          id
          title
          shortDescription
          description
          sectors
          state
          createdAt
          updatedAt
          owner
        }
        state
        createdAt
        updatedAt
        owner
      }
      state
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authors {
          id
          full_name
          affiliation
        }
        title
        shortDescription
        description
        hotspotlocation {
          latitude
          longitude
        }
        sectors
        catalog {
          id
          json
        }
        image {
          id
          url
          caption
          alt
        }
        pages {
          id
          title
          section
          camera
          baseMapName
          viewer_mode_3d
          createdAt
          updatedAt
          owner
        }
        microstories {
          id
          title
          shortDescription
          description
          sectors
          state
          createdAt
          updatedAt
          owner
        }
        state
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      title
      section
      camera
      baseMapName
      currentTime {
        dayNumber
        secondsOfDay
      }
      viewer_mode_3d
      scenarios {
        id
        ssp
        content
        split_map
        enabled_catalog_items {
          id
          json
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        section
        camera
        baseMapName
        currentTime {
          dayNumber
          secondsOfDay
        }
        viewer_mode_3d
        scenarios {
          id
          ssp
          content
          split_map
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
