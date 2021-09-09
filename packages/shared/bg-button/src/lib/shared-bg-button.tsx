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
      Welcome to SharedBgButton, this time from a feature branch2 with extended ci!!!
    </button>
  );
}

export default BgButton;
