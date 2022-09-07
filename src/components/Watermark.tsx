import styled from "styled-components/native";
import Heart from "../primitives/Heart";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Watermark: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{ top: insets.top - 12 }}>
      <Text>https://shuff.app</Text>
      <Text>
        <Heart size={9} /> by Adam Fratino
      </Text>
    </Container>
  );
};

export default Watermark;

const Container = styled.View`
  position: absolute;
  top: -16px;
  left: 0;
  right: 0;
  padding: 0 4px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.Text`
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
