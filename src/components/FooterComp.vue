<template>
    <footer>
        <div className="container">
			<div className="col" />
			<div className="col">
				<span className="copyright">&copy; 2021 CircuitRunners Robotics Inc.</span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss"> 
footer { 
background-color: #141414;
	.container {
	    display: flex;
	    padding: 2.5em;
		justify-content: center;
		align-content: center;
		flex-flow:row;
		overflow-wrap: normal;
	.col {
			width: 100%;
			overflow: hidden;
			flex-basis: 100%;
			align-self: center;
	.social {
		display: flex;
		flex-flow: nowrap;
		justify-content: center;
			a {
				padding-left: 1em;
				padding-right: 1em;
				filter: invert(1);
				img {
					width: 3em;
				}
				display: inline-block;
				// flex-grow: 0;
				// flex-wrap: nowrap;
				justify-content: space-evenly;
			}
		}
	.copyright{
		font-weight: bold;
		font-size: 1.125em;
		color: #fff;
	}
	}
	}
} 
</style> 

