import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos(
    $completed: Boolean
    $priority: Priority
    $deadline_status: String
    $sort_by: String
    $sort_direction: String
    $category_id: ID
  ) {
    todos(
      completed: $completed
      priority: $priority
      deadline_status: $deadline_status
      sort_by: $sort_by
      sort_direction: $sort_direction
      category_id: $category_id
    ) {
      id
      title
      description
      completed
      user_id
      deadline
      priority
      deadline_status
      category_id
      category {
        id
        name
        color
      }
      created_at
      updated_at
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      color
      created_at
      updated_at
    }
  }
`; 