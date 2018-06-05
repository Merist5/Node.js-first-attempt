process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
    }
    if (!input) {
        return;
    }
    switch(instruction) {
    case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
    case '/version':
        process.stdout.write('Node version:\n' + process.versions.node+ ' \n');
        process.stdout.write('Language:\n' + process.env.LANG);
        break;
    default:
        process.stderr.write('Wrong instruction!\n');
    };
});