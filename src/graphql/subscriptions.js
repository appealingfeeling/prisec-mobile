/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onCreateTenant(filter: $filter) {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onUpdateTenant(filter: $filter) {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant($filter: ModelSubscriptionTenantFilterInput) {
    onDeleteTenant(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
export const onCreateAccessCode = /* GraphQL */ `
  subscription OnCreateAccessCode(
    $filter: ModelSubscriptionAccessCodeFilterInput
  ) {
    onCreateAccessCode(filter: $filter) {
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
export const onUpdateAccessCode = /* GraphQL */ `
  subscription OnUpdateAccessCode(
    $filter: ModelSubscriptionAccessCodeFilterInput
  ) {
    onUpdateAccessCode(filter: $filter) {
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
export const onDeleteAccessCode = /* GraphQL */ `
  subscription OnDeleteAccessCode(
    $filter: ModelSubscriptionAccessCodeFilterInput
  ) {
    onDeleteAccessCode(filter: $filter) {
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
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($filter: ModelSubscriptionSiteFilterInput) {
    onCreateSite(filter: $filter) {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($filter: ModelSubscriptionSiteFilterInput) {
    onUpdateSite(filter: $filter) {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($filter: ModelSubscriptionSiteFilterInput) {
    onDeleteSite(filter: $filter) {
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
export const onCreateIncident = /* GraphQL */ `
  subscription OnCreateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onCreateIncident(filter: $filter) {
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
export const onUpdateIncident = /* GraphQL */ `
  subscription OnUpdateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onUpdateIncident(filter: $filter) {
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
export const onDeleteIncident = /* GraphQL */ `
  subscription OnDeleteIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onDeleteIncident(filter: $filter) {
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
export const onCreateShift = /* GraphQL */ `
  subscription OnCreateShift($filter: ModelSubscriptionShiftFilterInput) {
    onCreateShift(filter: $filter) {
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
export const onUpdateShift = /* GraphQL */ `
  subscription OnUpdateShift($filter: ModelSubscriptionShiftFilterInput) {
    onUpdateShift(filter: $filter) {
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
export const onDeleteShift = /* GraphQL */ `
  subscription OnDeleteShift($filter: ModelSubscriptionShiftFilterInput) {
    onDeleteShift(filter: $filter) {
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
export const onCreateTour = /* GraphQL */ `
  subscription OnCreateTour($filter: ModelSubscriptionTourFilterInput) {
    onCreateTour(filter: $filter) {
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
export const onUpdateTour = /* GraphQL */ `
  subscription OnUpdateTour($filter: ModelSubscriptionTourFilterInput) {
    onUpdateTour(filter: $filter) {
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
export const onDeleteTour = /* GraphQL */ `
  subscription OnDeleteTour($filter: ModelSubscriptionTourFilterInput) {
    onDeleteTour(filter: $filter) {
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
export const onCreateCheckpoint = /* GraphQL */ `
  subscription OnCreateCheckpoint(
    $filter: ModelSubscriptionCheckpointFilterInput
  ) {
    onCreateCheckpoint(filter: $filter) {
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
export const onUpdateCheckpoint = /* GraphQL */ `
  subscription OnUpdateCheckpoint(
    $filter: ModelSubscriptionCheckpointFilterInput
  ) {
    onUpdateCheckpoint(filter: $filter) {
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
export const onDeleteCheckpoint = /* GraphQL */ `
  subscription OnDeleteCheckpoint(
    $filter: ModelSubscriptionCheckpointFilterInput
  ) {
    onDeleteCheckpoint(filter: $filter) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateFeatureFlag = /* GraphQL */ `
  subscription OnCreateFeatureFlag(
    $filter: ModelSubscriptionFeatureFlagFilterInput
  ) {
    onCreateFeatureFlag(filter: $filter) {
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
export const onUpdateFeatureFlag = /* GraphQL */ `
  subscription OnUpdateFeatureFlag(
    $filter: ModelSubscriptionFeatureFlagFilterInput
  ) {
    onUpdateFeatureFlag(filter: $filter) {
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
export const onDeleteFeatureFlag = /* GraphQL */ `
  subscription OnDeleteFeatureFlag(
    $filter: ModelSubscriptionFeatureFlagFilterInput
  ) {
    onDeleteFeatureFlag(filter: $filter) {
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
export const onCreatePlatformStatus = /* GraphQL */ `
  subscription OnCreatePlatformStatus(
    $filter: ModelSubscriptionPlatformStatusFilterInput
  ) {
    onCreatePlatformStatus(filter: $filter) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const onUpdatePlatformStatus = /* GraphQL */ `
  subscription OnUpdatePlatformStatus(
    $filter: ModelSubscriptionPlatformStatusFilterInput
  ) {
    onUpdatePlatformStatus(filter: $filter) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const onDeletePlatformStatus = /* GraphQL */ `
  subscription OnDeletePlatformStatus(
    $filter: ModelSubscriptionPlatformStatusFilterInput
  ) {
    onDeletePlatformStatus(filter: $filter) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
