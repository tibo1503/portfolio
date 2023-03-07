import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  let project_id = Number(params.ID);
  if (isNaN(project_id)) {
      throw error(404, 'Not found');
  }

  return {
    title: 'Hello world!',
    content: String(project_id)
  };
}