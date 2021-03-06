/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($owner: String!) {
    onCreateStory(owner: $owner) {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($owner: String!) {
    onUpdateStory(owner: $owner) {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($owner: String!) {
    onDeleteStory(owner: $owner) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($owner: String!) {
    onCreatePage(owner: $owner) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($owner: String!) {
    onUpdatePage(owner: $owner) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($owner: String!) {
    onDeletePage(owner: $owner) {
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
