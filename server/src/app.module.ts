import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RideModule } from './ride/ride.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		MongooseModule.forRoot(process.env.DB_URI),
		AuthModule,
		UserModule,
		RideModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
