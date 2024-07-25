export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <h3>{user.email}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
