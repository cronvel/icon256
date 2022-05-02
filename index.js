
"use strict" ;

const exec = require( 'child_process' ).exec ;
const path = require( 'path' ) ;



if ( process.platform !== 'win32' ) {
	console.log( 'This module only supports Windows' ) ;
}



/**
 * Grabs a png icon (Buffer) from file
 * @param {String} iconPath Path to icon
 */
module.exports = iconPath => new Promise( ( resolve , reject ) => {
	exec( path.join( __dirname , 'extractor.exe' ) + ' ' + iconPath , ( error , stdout ) => {
		if ( error ) {
			reject( error ) ;
			return ;
		}

		resolve( Buffer.from( stdout.trim() , 'base64' ) ) ;
	} ) ;
} ) ;

