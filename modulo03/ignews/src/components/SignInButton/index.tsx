import styles from './styles.module.scss';
import Image from 'next/image';
import githubActive from '../../../public/images/githubActive.svg';
import close from '../../../public/images/close.svg';
import github from '../../../public/images/github.svg';
import { signIn, signOut, useSession } from 'next-auth/client';

const SignInButton = () => {
    const [session] = useSession();
    console.log('session', session)

    return session ? (
        <button type="button" className={styles.signInButton}
            onClick={() => signOut()}
            >
            <Image
                src={githubActive}
                alt="github"
                width={20}
                height={20}
            />
            <p>{session.user.name}</p>
            <div className={styles.close}> 
            <Image 
                src={close} 
                alt="github" 
                width={20}
                height={20}/>
            </div>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}
            onClick={() => signIn('github')}
            >
            <Image src={github} alt="github" width={20} height={20}/>
            <p>Sign in With Github</p>
        </button>
    );
}

export default SignInButton;