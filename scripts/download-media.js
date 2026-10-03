import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname, 'frontend/public/assets');
const media = {
  press: {
    'Top-channel-Logo-1.png': 'https://virtus.al/wp-content/uploads/2025/04/Top-channel-Logo-1.png',
    'Revista-Psikologjia-Logo.png': 'https://virtus.al/wp-content/uploads/2025/04/Revista-Psikologjia-Logo.png',
    'tv-klan-logo-1.png': 'https://virtus.al/wp-content/uploads/2025/04/tv-klan-logo-1.png',
    'Koha-Jone-Logo.png': 'https://virtus.al/wp-content/uploads/2025/04/Koha-Jone-Logo.png',
    'tutto-golfo-logo.png': 'https://virtus.al/wp-content/uploads/2025/07/tutto-golfo-logo.png',
    'Salerno-Notizie.png': 'https://virtus.al/wp-content/uploads/2025/04/Salerno-Notizie.png'
  }
};
for (const [folder, files] of Object.entries(media)) {
  const dir = path.join(root, folder);
  await fs.mkdir(dir, { recursive: true });
  for (const [name, url] of Object.entries(files)) {
    const target = path.join(dir, name);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status}`);
      await fs.writeFile(target, Buffer.from(await res.arrayBuffer()));
      console.log(`Downloaded ${name}`);
    } catch (e) {
      console.warn(`Could not download ${name}: ${e.message}`);
    }
  }
}
