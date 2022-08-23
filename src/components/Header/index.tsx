import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          {/* Portal renderiza o conteúdo em um local a parte */}
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
