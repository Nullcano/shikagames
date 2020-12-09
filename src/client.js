import * as sapper from '@sapper/app';
import sanityClient from '@sanity/client';

sapper.start({
	target: document.querySelector('#sapper')
});

export default sanityClient({
  projectId: 'zybmu9re',
  dataset: 'production'
})