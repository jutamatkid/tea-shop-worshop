
interface HelloVariableProps {
  name: string;
  age: number;
  // ใส่ ? หลังชื่อตัวแปรเพื่อบอกถึงว่าไม่ต้องมี props นี้ก็ได้
  verify?: boolean;
}

function HelloVariable({ name, age, verify = false }: HelloVariableProps) {
  
  
  return (
   <div>
    Hello {name} age: {age} verify: {verify ? "true" : "false"}
   </div>
  );
}

export default HelloVariable