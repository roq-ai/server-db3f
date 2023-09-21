const mapping: Record<string, string> = {
  comments: 'comment',
  companies: 'company',
  posts: 'post',
  'post-tags': 'post_tag',
  tags: 'tag',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
