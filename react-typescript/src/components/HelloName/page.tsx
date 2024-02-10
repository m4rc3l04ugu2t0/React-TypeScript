type HelloNameProps = {
    name: string;
};

export default function HelloName({ name }: HelloNameProps) {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Hello {name}!</h1>
        </main>
    );
}
