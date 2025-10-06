/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      id
      name
      status
      createdAt
      users {
        nextToken
        __typename
      }
      sites {
        nextToken
        __typename
      }
      incidents {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      tenantId
      tenant {
        id
        name
        status
        createdAt
        updatedAt
        __typename
      }
      email
      role
      status
      displayName
      phone
      createdAt
      lastLoginAt
      createdIncidents {
        nextToken
        __typename
      }
      assignedIncidents {
        nextToken
        __typename
      }
      shifts {
        nextToken
        __typename
      }
      tours {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByTenantId = /* GraphQL */ `
  query UsersByTenantId(
    $tenantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccessCode = /* GraphQL */ `
  query GetAccessCode($id: ID!) {
    getAccessCode(id: $id) {
      code
      forRole
      tenantId
      createdBy
      expiresAt
      usedBy
      usedAt
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAccessCodes = /* GraphQL */ `
  query ListAccessCodes(
    $filter: ModelAccessCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccessCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
        forRole
        tenantId
        createdBy
        expiresAt
        usedBy
        usedAt
        status
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      tenantId
      tenant {
        id
        name
        status
        createdAt
        updatedAt
        __typename
      }
      name
      address
      latitude
      longitude
      notes
      incidents {
        nextToken
        __typename
      }
      shifts {
        nextToken
        __typename
      }
      tours {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        name
        address
        latitude
        longitude
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sitesByTenantId = /* GraphQL */ `
  query SitesByTenantId(
    $tenantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sitesByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        name
        address
        latitude
        longitude
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIncident = /* GraphQL */ `
  query GetIncident($id: ID!) {
    getIncident(id: $id) {
      id
      tenantId
      tenant {
        id
        name
        status
        createdAt
        updatedAt
        __typename
      }
      siteId
      site {
        id
        tenantId
        name
        address
        latitude
        longitude
        notes
        createdAt
        updatedAt
        __typename
      }
      title
      description
      priority
      status
      createdBy
      creator {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      assignedTo
      assignee {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      latitude
      longitude
      createdAt
      updatedAt
      attachments {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listIncidents = /* GraphQL */ `
  query ListIncidents(
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const incidentsByTenantId = /* GraphQL */ `
  query IncidentsByTenantId(
    $tenantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const incidentsBySiteId = /* GraphQL */ `
  query IncidentsBySiteId(
    $siteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const incidentsByCreatedBy = /* GraphQL */ `
  query IncidentsByCreatedBy(
    $createdBy: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsByCreatedBy(
      createdBy: $createdBy
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const incidentsByAssignedTo = /* GraphQL */ `
  query IncidentsByAssignedTo(
    $assignedTo: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsByAssignedTo(
      assignedTo: $assignedTo
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getShift = /* GraphQL */ `
  query GetShift($id: ID!) {
    getShift(id: $id) {
      id
      tenantId
      officerId
      officer {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      siteId
      site {
        id
        tenantId
        name
        address
        latitude
        longitude
        notes
        createdAt
        updatedAt
        __typename
      }
      start
      end
      status
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listShifts = /* GraphQL */ `
  query ListShifts(
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        officerId
        siteId
        start
        end
        status
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shiftsByOfficerId = /* GraphQL */ `
  query ShiftsByOfficerId(
    $officerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsByOfficerId(
      officerId: $officerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        officerId
        siteId
        start
        end
        status
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const shiftsBySiteId = /* GraphQL */ `
  query ShiftsBySiteId(
    $siteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        officerId
        siteId
        start
        end
        status
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTour = /* GraphQL */ `
  query GetTour($id: ID!) {
    getTour(id: $id) {
      id
      tenantId
      siteId
      site {
        id
        tenantId
        name
        address
        latitude
        longitude
        notes
        createdAt
        updatedAt
        __typename
      }
      officerId
      officer {
        id
        tenantId
        email
        role
        status
        displayName
        phone
        createdAt
        lastLoginAt
        updatedAt
        __typename
      }
      start
      end
      progressPct
      status
      checkpoints {
        nextToken
        __typename
      }
      attachments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTours = /* GraphQL */ `
  query ListTours(
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        siteId
        officerId
        start
        end
        progressPct
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const toursBySiteId = /* GraphQL */ `
  query ToursBySiteId(
    $siteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    toursBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        officerId
        start
        end
        progressPct
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const toursByOfficerId = /* GraphQL */ `
  query ToursByOfficerId(
    $officerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    toursByOfficerId(
      officerId: $officerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        siteId
        officerId
        start
        end
        progressPct
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCheckpoint = /* GraphQL */ `
  query GetCheckpoint($id: ID!) {
    getCheckpoint(id: $id) {
      id
      tourId
      tour {
        id
        tenantId
        siteId
        officerId
        start
        end
        progressPct
        status
        createdAt
        updatedAt
        __typename
      }
      label
      qrCode
      latitude
      longitude
      required
      visitedAt
      verification
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCheckpoints = /* GraphQL */ `
  query ListCheckpoints(
    $filter: ModelCheckpointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckpoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tourId
        label
        qrCode
        latitude
        longitude
        required
        visitedAt
        verification
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const checkpointsByTourId = /* GraphQL */ `
  query CheckpointsByTourId(
    $tourId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCheckpointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkpointsByTourId(
      tourId: $tourId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tourId
        label
        qrCode
        latitude
        longitude
        required
        visitedAt
        verification
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      incidentId
      incident {
        id
        tenantId
        siteId
        title
        description
        priority
        status
        createdBy
        assignedTo
        latitude
        longitude
        createdAt
        updatedAt
        __typename
      }
      tourId
      tour {
        id
        tenantId
        siteId
        officerId
        start
        end
        progressPct
        status
        createdAt
        updatedAt
        __typename
      }
      url
      kind
      createdBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        incidentId
        tourId
        url
        kind
        createdBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attachmentsByIncidentId = /* GraphQL */ `
  query AttachmentsByIncidentId(
    $incidentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByIncidentId(
      incidentId: $incidentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        incidentId
        tourId
        url
        kind
        createdBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attachmentsByTourId = /* GraphQL */ `
  query AttachmentsByTourId(
    $tourId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByTourId(
      tourId: $tourId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        incidentId
        tourId
        url
        kind
        createdBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFeatureFlag = /* GraphQL */ `
  query GetFeatureFlag($id: ID!) {
    getFeatureFlag(id: $id) {
      key
      scope
      enabled
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFeatureFlags = /* GraphQL */ `
  query ListFeatureFlags(
    $filter: ModelFeatureFlagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatureFlags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        key
        scope
        enabled
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlatformStatus = /* GraphQL */ `
  query GetPlatformStatus($id: ID!) {
    getPlatformStatus(id: $id) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const listPlatformStatuses = /* GraphQL */ `
  query ListPlatformStatuses(
    $filter: ModelPlatformStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatformStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        disabled
        reason
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
