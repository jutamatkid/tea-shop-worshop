import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloVariable from "./learn-component/HelloVariable.tsx";
import ConditionalExample from "./learn-component/ConditionalExample.tsx";
import ShowBadge from "./learn-component/ShowBadge.tsx";
import PremiumFeature from "./learn-component/PremiumFeature.tsx";
import UserList from "./learn-component/UserList.tsx";
import DeleteButton from "./learn-component/DeleteButton.tsx";
import MyCard from "./learn-component/MyCard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelloVariable name={"Shiro"} age={12} />
    <HelloVariable name={"Kuro"} age={11} verify={true} />
    <HelloVariable name={"Zen"} age={42} verify={false} />
    <ConditionalExample isLoggedIn={true} />
    <ConditionalExample isLoggedIn={false} />
    <ShowBadge />
    <ShowBadge badge={""} />
    <ShowBadge badge={"sale"} />
    <PremiumFeature isPremium={true} />
    <PremiumFeature isPremium={false} />
    <UserList
      users={[
        {
          id: 1,
          name: "boy",
        },

        {
          id: 2,
          name: "nick",
        },
        {
          id: 3,
          name: "judy",
        },
      ]}
    />
    <DeleteButton
      onDelete={(id: number) => {
        alert(`Delete id: ${id}`);
      }}
    />
    <MyCard title="Profile" footer={<div>This is footer</div>}>
      <h1>name: Nick</h1>
      <p>age: 17</p>
      <p>type: fox</p>
    </MyCard>
    <MyCard title="Profile" footer={<HelloVariable name="test" age={15} />}>
      <h1>name: Nick</h1>
      <p>age: 17</p>
      <p>type: fox</p>
    </MyCard>
  </StrictMode>,
);
