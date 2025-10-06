/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const deleteIncident = /* GraphQL */ `
  mutation DeleteIncident(
    $input: DeleteIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    deleteIncident(input: $input, condition: $condition) {
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
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAccessCode = /* GraphQL */ `
  mutation CreateAccessCode(
    $input: CreateAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    createAccessCode(input: $input, condition: $condition) {
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
export const updateAccessCode = /* GraphQL */ `
  mutation UpdateAccessCode(
    $input: UpdateAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    updateAccessCode(input: $input, condition: $condition) {
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
export const deleteAccessCode = /* GraphQL */ `
  mutation DeleteAccessCode(
    $input: DeleteAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    deleteAccessCode(input: $input, condition: $condition) {
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
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const createIncident = /* GraphQL */ `
  mutation CreateIncident(
    $input: CreateIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    createIncident(input: $input, condition: $condition) {
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
export const updateIncident = /* GraphQL */ `
  mutation UpdateIncident(
    $input: UpdateIncidentInput!
    $condition: ModelIncidentConditionInput
  ) {
    updateIncident(input: $input, condition: $condition) {
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
export const createShift = /* GraphQL */ `
  mutation CreateShift(
    $input: CreateShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    createShift(input: $input, condition: $condition) {
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
export const updateShift = /* GraphQL */ `
  mutation UpdateShift(
    $input: UpdateShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    updateShift(input: $input, condition: $condition) {
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
export const deleteShift = /* GraphQL */ `
  mutation DeleteShift(
    $input: DeleteShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    deleteShift(input: $input, condition: $condition) {
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
export const createTour = /* GraphQL */ `
  mutation CreateTour(
    $input: CreateTourInput!
    $condition: ModelTourConditionInput
  ) {
    createTour(input: $input, condition: $condition) {
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
export const updateTour = /* GraphQL */ `
  mutation UpdateTour(
    $input: UpdateTourInput!
    $condition: ModelTourConditionInput
  ) {
    updateTour(input: $input, condition: $condition) {
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
export const deleteTour = /* GraphQL */ `
  mutation DeleteTour(
    $input: DeleteTourInput!
    $condition: ModelTourConditionInput
  ) {
    deleteTour(input: $input, condition: $condition) {
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
export const createCheckpoint = /* GraphQL */ `
  mutation CreateCheckpoint(
    $input: CreateCheckpointInput!
    $condition: ModelCheckpointConditionInput
  ) {
    createCheckpoint(input: $input, condition: $condition) {
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
export const updateCheckpoint = /* GraphQL */ `
  mutation UpdateCheckpoint(
    $input: UpdateCheckpointInput!
    $condition: ModelCheckpointConditionInput
  ) {
    updateCheckpoint(input: $input, condition: $condition) {
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
export const deleteCheckpoint = /* GraphQL */ `
  mutation DeleteCheckpoint(
    $input: DeleteCheckpointInput!
    $condition: ModelCheckpointConditionInput
  ) {
    deleteCheckpoint(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createFeatureFlag = /* GraphQL */ `
  mutation CreateFeatureFlag(
    $input: CreateFeatureFlagInput!
    $condition: ModelFeatureFlagConditionInput
  ) {
    createFeatureFlag(input: $input, condition: $condition) {
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
export const updateFeatureFlag = /* GraphQL */ `
  mutation UpdateFeatureFlag(
    $input: UpdateFeatureFlagInput!
    $condition: ModelFeatureFlagConditionInput
  ) {
    updateFeatureFlag(input: $input, condition: $condition) {
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
export const deleteFeatureFlag = /* GraphQL */ `
  mutation DeleteFeatureFlag(
    $input: DeleteFeatureFlagInput!
    $condition: ModelFeatureFlagConditionInput
  ) {
    deleteFeatureFlag(input: $input, condition: $condition) {
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
export const createPlatformStatus = /* GraphQL */ `
  mutation CreatePlatformStatus(
    $input: CreatePlatformStatusInput!
    $condition: ModelPlatformStatusConditionInput
  ) {
    createPlatformStatus(input: $input, condition: $condition) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const updatePlatformStatus = /* GraphQL */ `
  mutation UpdatePlatformStatus(
    $input: UpdatePlatformStatusInput!
    $condition: ModelPlatformStatusConditionInput
  ) {
    updatePlatformStatus(input: $input, condition: $condition) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const deletePlatformStatus = /* GraphQL */ `
  mutation DeletePlatformStatus(
    $input: DeletePlatformStatusInput!
    $condition: ModelPlatformStatusConditionInput
  ) {
    deletePlatformStatus(input: $input, condition: $condition) {
      id
      disabled
      reason
      updatedAt
      createdAt
      __typename
    }
  }
`;
