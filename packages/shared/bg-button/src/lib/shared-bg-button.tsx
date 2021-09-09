export interface BgButtonProps {
  color: string;
}

export function BgButton(props: BgButtonProps) {
  const { color } = props;
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      <h1>Welcome to SharedBgButton!!!!!</h1>
    </button>
  );
}

export default BgButton;
