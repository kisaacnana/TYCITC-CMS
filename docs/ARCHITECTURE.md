# TYCITC CMS Architecture

## Overview

TYCITC CMS is a React/TypeScript administrative client. It should not contain database credentials or server-only business logic.

```text
Public Website
      |
      v
  Backend API <----> Database
      ^
      |
  CMS React App
```

## Frontend layers

```text
src/
├── components/   # Reusable presentation components
├── layouts/      # Application shells/navigation
├── pages/        # Route-level screens
├── routes/       # Routing configuration
├── services/     # Mock and production API boundaries
├── types/        # Domain and API contracts
├── utils/        # Validation/content/permission helpers
└── theme/        # MUI theme configuration
```

## Content lifecycle

Content should move through explicit states:

`draft -> published -> archived`

Publishing must be authorized by the backend. A hidden/disabled button in the frontend is not a security control.

## Authentication

The production implementation should use an established identity provider or a secure backend session strategy. Tokens and credentials must never be hard-coded into the client.

## Roles

- **super_admin:** full administration
- **editor:** manage and publish content
- **author:** create and manage assigned content
- **viewer:** read-only access

The frontend permission matrix exists for interface behavior. The API must independently enforce the same permissions.

## API contract

Use typed request/response models. Prefer predictable resource endpoints such as:

- `GET /posts`
- `POST /posts`
- `PATCH /posts/:id`
- `DELETE /posts/:id`
- `GET /events`
- `GET /pages`
- `GET /media`
- `GET /messages`
- `GET /users`

List endpoints should support pagination, filtering and search as the dataset grows.

## Production requirements

Before launch:

- HTTPS only
- Authentication and RBAC
- Server-side validation
- Rate limiting
- Secure file-upload validation
- Audit logging
- Database backups
- Error monitoring
- CORS restricted to trusted origins
- Secrets stored outside source control
- Automated build and test checks
