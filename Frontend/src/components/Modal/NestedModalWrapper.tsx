const NestedModalWrapper = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <div className="fixed top-0 left-0 z-50">{children}</div>;
};

export default NestedModalWrapper;
