export default async function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div>
      
      <div>{children}</div>
    </div>
  );
}
