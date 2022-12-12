const fetchProviders = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/auth/providers`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch providers data");
  }
  return res.json();
};

export default fetchProviders;
