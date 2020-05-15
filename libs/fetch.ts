import fetch from 'isomorphic-unfetch';

export default async function (...args: any[]): Promise<any> {
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
}
