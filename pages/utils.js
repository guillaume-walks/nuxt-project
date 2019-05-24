import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export function fetchContentful (uid) {
  return new Promise ((res, rej) => {
    client.getEntry( uid, { include: 5 })
    .then(entry => res(entry))
    .catch(err => rej(err));
  }) 
}

