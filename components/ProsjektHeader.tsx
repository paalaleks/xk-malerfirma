export default function ProsjektHeader() {
  return (
    <header className="w-full pb-20 lg:pb-40 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
            {/* <div>
              <Badge>Platform</Badge>
            </div> */}
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                This is the start of something new
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
