const tests = [
    {
        title: 'Products Keys',
        test: require('./products-keys.js') 
    }
];

console.log('Stating tests');

for(const test of tests)
{
    console.log("\n\x1b[34m", 'Testing', test.title, '💡', "\x1b[0m");
    test.test();
    console.log("\x1b[34m", test.title, 'Test ended', '👌', "\x1b[0m\n");
}

console.log('Tests ended');