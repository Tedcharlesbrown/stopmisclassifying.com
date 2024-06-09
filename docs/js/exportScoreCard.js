document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('export-button').addEventListener('click', function () {
        const canvas = document.getElementById('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        const ctx = canvas.getContext('2d');

        const squares = document.querySelectorAll('.scorecard .square');
        const cols = 5;
        const rows = 4;
        const squareSize = canvas.width / cols;
        const borderSize = 10; // Size of the border
        const totalVerticalBorder = (canvas.height - (squareSize * rows)) / 2; // Equal border size on top and bottom
        const totalHorizontalBorder = (canvas.width - (squareSize * cols)) / 2; // Equal border size on left and right
        const textHeight = 150; // Total height allocated for text
        const textPadding = 30; // Padding between grid and text

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        squares.forEach((square, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const x = col * squareSize + totalHorizontalBorder;
            const y = row * squareSize + totalVerticalBorder - textPadding / 2;

            // Draw the background square
            ctx.fillStyle = getComputedStyle(square).backgroundColor;
            ctx.fillRect(x + borderSize, y + borderSize, squareSize - 2 * borderSize, squareSize - 2 * borderSize);

            // Draw the white border
            ctx.strokeStyle = 'white';
            ctx.lineWidth = borderSize;
            ctx.strokeRect(x + borderSize / 2, y + borderSize / 2, squareSize - borderSize, squareSize - borderSize);
        });

        // Draw the text background
        const textBackgroundHeight = 100;
        const textBackgroundY = canvas.height - textBackgroundHeight;
        ctx.fillStyle = 'lightgrey'; // Background color for the text
        ctx.fillRect(0, textBackgroundY, canvas.width, textBackgroundHeight);

        // Draw the text
        ctx.fillStyle = 'black';
        
        // Largest line, bold
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('StopMisclassifying.com', canvas.width / 2, textBackgroundY + 85);
        
        // Smaller line, italics
        ctx.font = 'italic 20px Arial';
        ctx.fillText('Get your Scorecard at', canvas.width / 2, textBackgroundY + 50);
        
        // Main title
        ctx.font = '30px Arial';
        ctx.fillText('Independent Contractor or Employee?', canvas.width / 2, textBackgroundY + 25);

        const link = document.createElement('a');
        link.download = 'scorecard.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
