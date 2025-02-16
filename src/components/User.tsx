type UserProps = {
    name: string;
  };
   
  function User({ name }: UserProps) {
    return <li>User: {name}</li>;
  }
   
  export default function UserProp() {
    const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
   
    return (
      <>
        <ul>
          {users.map((user, index) => (
            <User key={user} name={user.name} />
          ))}
        </ul>
      </>
    );
  }