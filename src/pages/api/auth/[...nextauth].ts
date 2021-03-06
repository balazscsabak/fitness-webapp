import axios from 'axios';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ResType, UserType } from '../../../types';

export default NextAuth({
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			// @ts-ignore
			async authorize(credentials, req) {
				const email = credentials?.email;
				const password = credentials?.password;

				const {
					data: {
						status,
						// @ts-ignore
						data: { user, token, reason },
					},
				} = await axios.post<ResType<UserType>>(
					`${process.env.NEXT_PUBLIC_USER_SERVICE_ROUTE}/users/login`,
					{
						email,
						password,
					}
				);

				if (reason === 'not_verified') throw new Error('not_verified');

				if (status && user) {
					return {
						...user,
						token,
					};
				} else {
					return null;
				}
			},
		}),
	],

	callbacks: {
		async jwt({ token, account, user }) {
			if (account) {
				token.id = user?.id;
				token.authToken = user?.token;
			}

			return token;
		},

		async session({ session, token }) {
			try {
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_USER_SERVICE_ROUTE}/users/me`,
					{
						headers: {
							// @ts-ignore
							Authorization: 'Bearer ' + token.authToken,
						},
					}
				);

				if (!data.status) {
					session.error = true;
				}

				// @ts-ignore
				session.user = data?.data?.user;
				session.authToken = token.authToken as string;

				return session;
			} catch (error) {
				session.error = true;
				return session;
			}
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
});
